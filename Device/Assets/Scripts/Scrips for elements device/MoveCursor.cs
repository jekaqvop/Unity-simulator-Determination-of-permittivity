using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MoveCursor : MonoBehaviour
{
    public Vector3 StartPosition;
    public Vector3 FinishPosition;
    public GameObject HandleRotate;
    public bool UsedMouseZ = true;
    public bool UsedMouseY = true;
    Vector3 step = new Vector3(0, 0, 0);
    Vector3 central = new Vector3(0,0,0);
    Vector3 angele = new Vector3(0,0,0);

    public Vector2 rotationRange = new Vector3(360, 360);

    public Vector3 Central
    {
        get => Central;
        set => central = value;
    }
    // Start is called before the first frame update
    void Start()
    {
        rotationRange = HandleRotate.GetComponent<RoteteElementMouse>().rotationRange;
        angele = HandleRotate.GetComponent<RoteteElementMouse>().M_FollowAngles;
        step = new Vector3((FinishPosition.x - StartPosition.x) / rotationRange.x, (FinishPosition.y - StartPosition.y) / rotationRange.y, (FinishPosition.z - StartPosition.z) / rotationRange.x);
        central = new Vector3(StartPosition.x + (FinishPosition.x - StartPosition.x) / 2, StartPosition.y + (FinishPosition.y - StartPosition.y) / 2);
        if (UsedMouseZ && UsedMouseY)
            transform.localPosition = new Vector3(transform.localPosition.x, central.y + step.y * HandleRotate.GetComponent<RoteteElementMouse>().M_FollowAngles.y, central.z + step.z * HandleRotate.GetComponent<RoteteElementMouse>().M_FollowAngles.x);
        else if (UsedMouseZ && !UsedMouseY)
            transform.localPosition = new Vector3(transform.localPosition.x, transform.localPosition.y, StartPosition.z + (FinishPosition.z - StartPosition.z) / 2 + step.z * angele.x);
        else if (!UsedMouseZ && UsedMouseY)
            transform.localPosition = new Vector3(transform.localPosition.x, StartPosition.y + (FinishPosition.y - StartPosition.y) / 2 + step.y * angele.y, transform.localPosition.z);
    }

    // Update is called once per frame
    void Update()
    {
        
        //transform.position += (FinishPosition.transform.position - StartPosition.transform.position) * transform.rotation;
        if (angele != HandleRotate.GetComponent<RoteteElementMouse>().M_FollowAngles)        
        {
            angele = HandleRotate.GetComponent<RoteteElementMouse>().M_FollowAngles;
            if(UsedMouseZ && UsedMouseY)
                transform.localPosition = new Vector3(transform.localPosition.x, central.y + step.y * HandleRotate.GetComponent<RoteteElementMouse>().M_FollowAngles.y, central.z + step.z * HandleRotate.GetComponent<RoteteElementMouse>().M_FollowAngles.x); 
            else if(UsedMouseZ && !UsedMouseY)
                transform.localPosition = new Vector3(transform.localPosition.x, transform.localPosition.y, StartPosition.z + (FinishPosition.z - StartPosition.z) / 2 + step.z * angele.x);
            else if(!UsedMouseZ && UsedMouseY)
                transform.localPosition = new Vector3(transform.localPosition.x, StartPosition.y + (FinishPosition.y - StartPosition.y) / 2 + step.y * angele.y, transform.localPosition.z);

        }

    }
}
