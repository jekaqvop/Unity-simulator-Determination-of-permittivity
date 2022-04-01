using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ChleckWcoijl : MonoBehaviour
{
    public float ControlNumberElement = 0f;
    
    void Update()
    {       
        if (!GetComponent<IsTheSeatOccupied>().IsSeatOccupied)
        {
            ControlNumberElement = 0f;
        }       
    }
}
