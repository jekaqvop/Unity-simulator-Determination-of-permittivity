using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CheckSampleEvent : MonoBehaviour
{
     bool checkSample;
    // Start is called before the first frame update
    void Start()
    {
        checkSample = GetComponent<IsTheSeatOccupied>().IsSeatOccupied;
    }

    // Update is called once per frame
    void Update()
    {
        if(checkSample != GetComponent<IsTheSeatOccupied>().IsSeatOccupied && GetComponent<IsTheSeatOccupied>().IsSeatOccupied)
            EventManager.OcupatedSample(true);
        else if(checkSample != GetComponent<IsTheSeatOccupied>().IsSeatOccupied && !GetComponent<IsTheSeatOccupied>().IsSeatOccupied)
            EventManager.OcupatedSample(false);
        checkSample = GetComponent<IsTheSeatOccupied>().IsSeatOccupied;
    }
}
