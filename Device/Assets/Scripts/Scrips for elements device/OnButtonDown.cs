using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class OnButtonDown : MonoBehaviour
{    
    public float OnMouseDownX = -0.1f;
    public float StartPositionX = -0.1f;
    bool status = false;
    float defaultPositionX = 0f;

    private void Start() 
    {
        transform.localPosition = new Vector3(StartPositionX, transform.localPosition.y, transform.localPosition.z);                
    }

    private void OnMouseDrag() 
    {       
        defaultPositionX = transform.localPosition.x;
        transform.localPosition = new Vector3(OnMouseDownX, transform.localPosition.y, transform.localPosition.z);        
    }

    private void OnMouseUp() 
    {
        transform.localPosition = new Vector3(StartPositionX, transform.localPosition.y, transform.localPosition.z);    
    }  
}
