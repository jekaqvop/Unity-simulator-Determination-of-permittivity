using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class RoteteElementMouse : MonoBehaviour
{
    public Vector2 rotationRange = new Vector3(70, 70);
    float rotationRangeForAdditionalObjectY = 0;
    public float RotationRangeForAdditionalObjectY
    {
        set => rotationRangeForAdditionalObjectY = value;
        get => rotationRangeForAdditionalObjectY; 
    }
    bool useRestrictionsForAdditionalObjectY = false;
    public bool UseRestrictionsForAdditionalObjectY
    {
        set => useRestrictionsForAdditionalObjectY = value;
    }
    public float rotationSpeed = 10;
    public float dampingTime = 0.2f;
    #if MOBILE_INPUT
    public bool autoZeroVerticalOnMobile = true;
    public bool autoZeroHorizontalOnMobile = false;
    #endif
    public bool relative = true;

    public bool UsedMouseX = true;
    public bool UsedMouseY = true;
    public bool RotationAroundY = true;
    public bool RotationAroundX = true;
    public bool UseRestrictions = true;

    private Vector3 m_TargetAngles;
    private Vector3 m_FollowAngles;
    
    private Vector3 m_FollowVelocity;
    private Quaternion m_OriginalRotation;

    public Vector3 M_FollowAngles
    {
        get
        {
            return m_FollowAngles;    // ���������� �������� ��������
        }       
    }
    private void Start()
    {
        m_OriginalRotation = transform.localRotation;
    }

   
    private void OnMouseDrag()
    {
         float inputH = 0f;
         float inputV = 0f;
    // we make initial calculations from the original local rotation
    transform.localRotation = m_OriginalRotation;

        // read input from mouse or mobile controls
       
        if (relative)
        {
            float Y = -Input.GetAxis("Mouse Y");
            float X = -Input.GetAxis("Mouse X");
            if (RotationAroundX && RotationAroundY)
            {
                inputH = X;
                inputV = Y;
            }            
            else if (RotationAroundX && !RotationAroundY)
            {
                if(X == 0)
                    inputH = Y;
                else
                    inputH = Mathf.Pow(((Mathf.Pow(X, 2f) + Mathf.Pow(Y, 2f))), 0.5f) * (X / Mathf.Pow(X, 0f));
            }
            else if (!RotationAroundX && RotationAroundY)
            {
                if (Y == 0)
                    inputV = -X;
                else
                    inputV = Mathf.Pow(((Mathf.Pow(X, 2f) + Mathf.Pow(Y, 2f))), 0.5f) * (Y / Mathf.Pow(Y, 0f));                
            }
            // wrap values to avoid springing quickly the wrong way from positive to negative
#if RestrictionsRotate    
            if (m_TargetAngles.y > 180)
            {
                m_TargetAngles.y -= 360;
                m_FollowAngles.y -= 360;
            }
            if (m_TargetAngles.x > 180)
            {
                m_TargetAngles.x -= 360;
                m_FollowAngles.x -= 360;
            }
            if (m_TargetAngles.y < -180)
            {
                m_TargetAngles.y += 360;
                m_FollowAngles.y += 360;
            }
            if (m_TargetAngles.x < -180)
            {
                m_TargetAngles.x += 360;
                m_FollowAngles.x += 360;
            }
#else

#endif


#if MOBILE_INPUT
            // on mobile, sometimes we want input mapped directly to tilt value,
            // so it springs back automatically when the look input is released.
			if (autoZeroHorizontalOnMobile) 
				m_TargetAngles.y = Mathf.Lerp (-rotationRange.y * 0.5f, rotationRange.y * 0.5f, inputH * .5f + .5f);			
            else             
				m_TargetAngles.y += inputH * rotationSpeed;			
			if (autoZeroVerticalOnMobile)             
				m_TargetAngles.x = Mathf.Lerp (-rotationRange.x * 0.5f, rotationRange.x * 0.5f, inputV * .5f + .5f);			
            else            
				m_TargetAngles.x += inputV * rotationSpeed;
			
#else
            // with mouse input, we have direct control with no springback required.
            m_TargetAngles.y += inputH * rotationSpeed;
            m_TargetAngles.x += inputV * rotationSpeed;
#endif

            // clamp values to allowed range
            if (UseRestrictions)
            {
                m_TargetAngles.y = Mathf.Clamp(m_TargetAngles.y, -rotationRange.y * 0.5f, rotationRange.y * 0.5f);
                m_TargetAngles.x = Mathf.Clamp(m_TargetAngles.x, -rotationRange.x * 0.5f, rotationRange.x * 0.5f);
            }
            if (useRestrictionsForAdditionalObjectY)           
                m_TargetAngles.y = Mathf.Clamp(m_TargetAngles.y, -rotationRangeForAdditionalObjectY, rotationRange.x * 0.5f);                
          
           
        }
        else
        {
            inputH = Input.mousePosition.x;
            inputV = Input.mousePosition.y;

            // set values to allowed range
            m_TargetAngles.y = Mathf.Lerp(-rotationRange.y * 0.5f, rotationRange.y * 0.5f, inputH / Screen.width);
            m_TargetAngles.x = Mathf.Lerp(-rotationRange.x * 0.5f, rotationRange.x * 0.5f, inputV / Screen.height);
        }

        // smoothly interpolate current values to target angles
        m_FollowAngles = Vector3.SmoothDamp(m_FollowAngles, m_TargetAngles, ref m_FollowVelocity, dampingTime);       
        // update the actual gameobject's rotation
        transform.localRotation = m_OriginalRotation * Quaternion.Euler(-m_FollowAngles.x, m_FollowAngles.y, 0);
      
    }
    public void RotateElement(Vector2 RotationSpeedAdditional)
    {
        float inputH = RotationSpeedAdditional.x;
        float inputV = RotationSpeedAdditional.y;        
        m_TargetAngles.x += inputH * rotationSpeed;
        m_TargetAngles.y += inputV * rotationSpeed;
        if (UseRestrictions)
        {
           m_TargetAngles.y = Mathf.Clamp(m_TargetAngles.y, -rotationRange.y * 0.5f, rotationRange.y * 0.5f);
           m_TargetAngles.x = Mathf.Clamp(m_TargetAngles.x, -rotationRange.x * 0.5f, rotationRange.x * 0.5f);
        }
        // smoothly interpolate current values to target angles
        m_FollowAngles = Vector3.SmoothDamp(m_FollowAngles, m_TargetAngles, ref m_FollowVelocity, 0);       
        // update the actual gameobject's rotation
        transform.localRotation = m_OriginalRotation * Quaternion.Euler(-m_FollowAngles.x, m_FollowAngles.y, 0);      
    }
}

