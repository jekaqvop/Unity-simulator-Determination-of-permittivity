using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class LimitRotationForPenUpperElectrode : MonoBehaviour
{
    public GameObject ControlElement;
    public float D;
    bool check = false;
    float rotationRangeForAdditionalObjectY;
    void OnMouseDown() 
    {
        if(!check)
        {
            rotationRangeForAdditionalObjectY = ControlElement.GetComponent<RoteteElementMouse>().rotationRange.x * 0.5f - D * 360f;
            ControlElement.GetComponent<RoteteElementMouse>().UseRestrictionsForAdditionalObjectY = true;
            ControlElement.GetComponent<RoteteElementMouse>().RotationRangeForAdditionalObjectY = rotationRangeForAdditionalObjectY;
        }
        else if(check)
            ControlElement.GetComponent<RoteteElementMouse>().UseRestrictionsForAdditionalObjectY = false;
        check = !check;
    }
}
