using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ControlFrequency : MonoBehaviour
{
    public GameObject Coilcontrol;
    public GameObject LeverControl;
    float controlNumber = 0;
    public float ControlNumber
    {
        get => controlNumber;
    }
   
    // Update is called once per frame
    void Update()
    {
        float CursorFrequencyPositionZ = transform.localPosition.z;
        if(CursorFrequencyPositionZ < 8f && CursorFrequencyPositionZ > 7.7f 
            && Coilcontrol.GetComponent<ChleckWcoijl>().ControlNumberElement == 250
            && LeverControl.GetComponent<RotateClick>().numberObject == 6)
            controlNumber = 78.3f;
        else if(CursorFrequencyPositionZ < -3.4f && CursorFrequencyPositionZ > -3.7f && 
                Coilcontrol.GetComponent<ChleckWcoijl>().ControlNumberElement == 900
                && LeverControl.GetComponent<RotateClick>().numberObject == 7)
            controlNumber = 130f;
        else
            controlNumber = 0;
    }
}
