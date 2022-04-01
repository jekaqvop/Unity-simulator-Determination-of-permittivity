using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class replacer1 : MonoBehaviour
{
    public GameObject Face;
    public GameObject Scales;
    public GameObject Device;
    public GameObject BoxView;
    public GameObject ScreenView;
    public GameObject Rozet;
    bool move = false;
    Vector3 startPosition;
    Vector3 needPosition;
    float speed = 0.04f;
    float offset = 0;
    Quaternion startRotation;
    Quaternion needRotaton;
    Vector3 cameraDefaultPosition;
    Quaternion cameraDefaultRotaton;    

    void Start()
    {
        cameraDefaultPosition = transform.position;
        cameraDefaultRotaton = transform.rotation;
    }

    public void moveDefault()
    { 
         if (!move)
        {
            move = true;
            startPosition = transform.position;
            startRotation = transform.rotation;
            needPosition = cameraDefaultPosition;
            needRotaton =  cameraDefaultRotaton;

        }      
    }

    public void Move()
    {
        if (!move)
        {
            move = true;
            startPosition = transform.position;
            startRotation = transform.rotation;
            needPosition = Device.transform.position;
            needRotaton =  Device.transform.rotation;

        }

    }

    public void Move1()
    {
        if (!move)
        {
            move = true;
            startPosition = transform.position;
            startRotation = transform.rotation;
            needPosition = Face.transform.position;
            needRotaton = Face.transform.rotation;

        }

    }

    public void Move0()
    {
        if (!move)
        {
            move = true;
            startPosition = transform.position;
            startRotation = transform.rotation;
            needPosition = Scales.transform.position;
            needRotaton = Scales.transform.rotation;
        }
    }

    public void MoveToBox()     
    {
        if (!move)
        {
            move = true;
            startPosition = transform.position;
            startRotation = transform.rotation;
            needPosition = BoxView.transform.position;
            needRotaton = BoxView.transform.rotation;
        }
    }

    public void MoveToScreen()     
    {
        if (!move)
        {
            move = true;
            startPosition = transform.position;
            startRotation = transform.rotation;
            needPosition = ScreenView.transform.position;
            needRotaton = ScreenView.transform.rotation;
        }
    }

    public void MoveToRozet()
    {
        if (!move)
        {
            move = true;
            startPosition = transform.position;
            startRotation = transform.rotation;
            needPosition = Rozet.transform.position;
            needRotaton =  Rozet.transform.rotation;

        }

    }

    void FixedUpdate()
    {
        if (move)
        {
            offset += speed;
            transform.position = Vector3.Lerp(startPosition, needPosition, offset);
            transform.rotation = Quaternion.Lerp(startRotation, needRotaton, offset);
            if (offset >= 1)
            {
                move = false;
                offset = 0;
            }
        }
    }
}


