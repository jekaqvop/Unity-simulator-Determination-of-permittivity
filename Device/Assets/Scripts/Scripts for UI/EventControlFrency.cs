using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class EventControlFrency : MonoBehaviour
{
    // Start is called before the first frame update
   
    bool Is250 = false;
    bool Is900 = false;
    // Update is called once per frame
    void Update()
    {
        if(!Is250 &&
            GetComponent<ControlFrequency>().transform.localPosition.z < 8f && GetComponent<ControlFrequency>().transform.localPosition.z > 7.7f 
            && GetComponent<ControlFrequency>().Coilcontrol.GetComponent<ChleckWcoijl>().ControlNumberElement == 250
            && GetComponent<ControlFrequency>().LeverControl.GetComponent<RotateClick>().numberObject == 6)
        {            
            Is250 = true;
            EventManager.ControlFrequency(true);           
        }
        if(GetComponent<ControlFrequency>().transform.localPosition.z < -3.4f && GetComponent<ControlFrequency>().transform.localPosition.z > -3.7f && 
               GetComponent<ControlFrequency>().Coilcontrol.GetComponent<ChleckWcoijl>().ControlNumberElement == 900
                && GetComponent<ControlFrequency>().LeverControl.GetComponent<RotateClick>().numberObject == 7 && !Is900)
        {
            Is900 = true;
            EventManager.ControlFrequency(true);           
        }
    }
}
