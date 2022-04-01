using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ChackCoilForEvent : MonoBehaviour
{
    bool checkCoil;
    // Start is called before the first frame update
    void Start()
    {
        checkCoil = GetComponent<IsTheSeatOccupied>().IsSeatOccupied;
    }

    // Update is called once per frame
    void Update()
    {
        if(checkCoil != GetComponent<IsTheSeatOccupied>().IsSeatOccupied && GetComponent<IsTheSeatOccupied>().IsSeatOccupied)
        {

            EventManager.OcupatedCoil(true);            
        }
        if(checkCoil != GetComponent<IsTheSeatOccupied>().IsSeatOccupied && !GetComponent<IsTheSeatOccupied>().IsSeatOccupied)
        {
            Debug.Log("falseCoil");
            EventManager.OcupatedCoil(false);            
        }
        checkCoil = GetComponent<IsTheSeatOccupied>().IsSeatOccupied;
    }
}
