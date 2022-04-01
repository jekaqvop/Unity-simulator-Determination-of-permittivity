using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ChangeControlNumber : MonoBehaviour
{
    public float ControlNumber = 250f;
    public GameObject ControlObject;   
    void OnMouseDown()
    {
        if(GetComponent<MoveElement>().Status)
            ControlObject.GetComponent<ChleckWcoijl>().ControlNumberElement = ControlNumber;       
    }
}
