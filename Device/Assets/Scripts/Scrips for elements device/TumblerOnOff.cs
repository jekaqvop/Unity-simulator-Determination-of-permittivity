using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class TumblerOnOff : MonoBehaviour
{
    [SerializeField]
    GameObject Button;
    [SerializeField]
    GameObject Pos1;
    [SerializeField]
    GameObject Pos2; 
    [SerializeField]
    GameObject Indicator;
    [SerializeField]
    public bool Status = false;
    [SerializeField]
    Material[] materials;
    [SerializeField]
    GameObject Rozet;
    [SerializeField]
    bool IsKalibration = false;
    private void OnMouseDown()
    {
        if (!Status)
        {
            Button.transform.position =  Pos2.transform.position;
            Button.transform.rotation =  Pos2.transform.rotation;
            Status = true;
            if(Indicator)
                if(Rozet)
                    if(Rozet.GetComponent<IsTheSeatOccupied>().IsSeatOccupied)
                    {
                        Indicator.GetComponent<Renderer>().material = materials[1];
                        if(!IsKalibration)
                            EventManager.SwitchWork(true);
                    }
        }
        else
        {
            Button.transform.position = Vector3.Lerp(Pos2.transform.position, Pos1.transform.position, 1);
            Button.transform.rotation = Quaternion.Lerp(Pos2.transform.rotation, Pos1.transform.rotation, 1);
            Status = false;
            if(IsKalibration)
                    EventManager.Measurement(true);
            if (Indicator)
            {
                Indicator.GetComponent<Renderer>().material = materials[0];                
                EventManager.SwitchWork(false);
            }
                
        }
    }
    
  
}
