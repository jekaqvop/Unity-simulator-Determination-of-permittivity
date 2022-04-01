using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MoveCursorByClick : MonoBehaviour
{
    public GameObject IsOnOff;
    public GameObject ControlRotateElement;
    public Vector2 RotationSpeed = new Vector2(0.1f, 0.1f);
    private bool MouseDOWN = false;
    private void OnMouseDown()
    {   
        MouseDOWN = true;
    }    

    private void OnMouseUp()
    {
        MouseDOWN = false;
    }

    private void Update()
    {
        if(MouseDOWN && IsOnOff.GetComponent<TumblerOnOff>().Status)
            ControlRotateElement.GetComponent<RoteteElementMouse>().RotateElement(RotationSpeed);
    }
}
