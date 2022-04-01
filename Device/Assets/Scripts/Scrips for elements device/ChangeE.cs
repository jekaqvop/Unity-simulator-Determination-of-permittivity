using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ChangeE : MonoBehaviour
{
    public GameObject ControlElement;
    public float E;
     
    void OnMouseDown() 
    {
        if(GetComponent<MoveElement>().Status)
        {
            ControlElement.GetComponent<ContolCapasity>().e = this.E;             
        }  
    }
}
