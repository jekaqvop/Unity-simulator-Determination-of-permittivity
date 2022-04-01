using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MoveArrow : MonoBehaviour
{
    public GameObject MeasurementOrCalibration;
    public GameObject CheckOnOff;
    public GameObject Calibration;
    public GameObject CursorCapasity;
    public GameObject QorDeltaQ;
    public GameObject LowerElectrode;
    public GameObject CursorFrequency;
    public GameObject LoverElectrode;
    public GameObject LimitQ;
    public GameObject Coil;
    public GameObject Rozet;

    void Start()
    {
        m_OriginalRotation = transform.localRotation;
    }
  
    float speedArrow = 0.25f;
    void Update()
    {        
        if (CheckOnOff.GetComponent<TumblerOnOff>().Status && Rozet.GetComponent<IsTheSeatOccupied>().IsSeatOccupied)
        {
            if (MeasurementOrCalibration.GetComponent<TumblerOnOff>().Status)
                rorateArrowAngle(speedArrow * Calibration.GetComponent<RoteteElementMouse>().M_FollowAngles.x + 45);
            else
            {                
                float actualCapacity = LowerElectrode.GetComponent<ContolCapasity>().capacity;
                
                float realCapacity = getRealCapasity(actualCapacity);
               
                float angle = getAngelforCapastity(realCapacity);       
                rorateArrowAngle(angle);
            }
        }
        else
            moveToStartPosition();
    }

    float getRealCapasity(float actualCapacity)
    {    
         return CursorFrequency.GetComponent<ControlFrequency>().ControlNumber + actualCapacity;     
    }
    
    float getAngelforCapastity(float actualCapacity = 81)
    {
        if(!Coil.GetComponent<IsTheSeatOccupied>().IsSeatOccupied)
            return 0;
        float maxEngle = 55f;
        switch (LimitQ.GetComponent<RotateClick>().numberObject)
        {
            case 0:
                maxEngle = 70f;
                break;
            case 1:
                maxEngle = 23.34f;
                break;
            case 2:
                maxEngle = 200f;
                break;
           case 3:
                maxEngle = 170f;
                break;
        } 
        if(QorDeltaQ.GetComponent<RotateClick>().numberObject == 1)
            maxEngle *= 0.25f;
        if(actualCapacity == 0)
            return 0;
        double A = 23.896222121074192080109239872553;
        double B = 36.1037778789258079198907601274465;
        float Capasity = (float)(A * (-CursorCapasity.transform.localPosition.z + 8.67f) + B);        
        float angle = Mathf.Clamp(-5*Mathf.Abs(actualCapacity - Capasity) + maxEngle, 0, 90);       
        
        return angle;
    }

    void moveToStartPosition()
    {
        m_TargetAngles.x = 0;
        m_FollowAngles = Vector3.SmoothDamp(m_FollowAngles, m_TargetAngles, ref m_FollowVelocity, dampingTime);
        transform.localRotation = m_OriginalRotation * Quaternion.Euler(-m_FollowAngles.x, 0, 0);
    }  

    public float dampingTime = 0.3f;   
    public Vector3 m_TargetAngles;
    private Vector3 m_FollowAngles = new Vector3(0,0,0);
    private Vector3 m_FollowVelocity;
    private Quaternion m_OriginalRotation;

    private void rorateArrowAngle(float inputH)    
    {
        m_TargetAngles.x = Mathf.Clamp(inputH, 0 , 90);
        m_FollowAngles = Vector3.SmoothDamp(m_FollowAngles, m_TargetAngles, ref m_FollowVelocity, dampingTime);
        transform.localRotation = m_OriginalRotation * Quaternion.Euler(-m_FollowAngles.x, 0, 0);
    }
}
