using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ContolCapasity : MonoBehaviour
{
    public GameObject UpperElectrode;
    float E0 = 1.0006f;
    public float e = 1;
    public float d = 0;
    public float E
    {
        set => e = value;
    }
    public float capacity = 0f;
   
    float S = Mathf.PI * Mathf.Pow(0.025f, 2);
    // Update is called once per frame
    void Update()
    {
        d = Mathf.Abs(UpperElectrode.GetComponent<MoveCursor>().StartPosition.y - UpperElectrode.transform.localPosition.y) / 0.078f;
        if (d == 0)
        {
            capacity = 0;
            return;
        }       
        else if (GetComponent<IsTheSeatOccupied>().IsSeatOccupied)
        {
            capacity = (E0 * e * S) / (d * 0.001f);            
        }
        else if (!GetComponent<IsTheSeatOccupied>().IsSeatOccupied)
        {
            capacity = (E0 * S) / (d * 0.001f);  
        }
        
    }
}
