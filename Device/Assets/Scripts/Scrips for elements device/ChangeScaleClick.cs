using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ChangeScaleClick : MonoBehaviour
{
    public GameObject CotrolObject;
    private void OnMouseDown()
    {        
        CotrolObject.GetComponent<UpdateScale>().ChangeScale();
    }
}
