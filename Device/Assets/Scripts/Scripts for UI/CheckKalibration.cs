using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CheckKalibration : MonoBehaviour
{
    public GameObject checkKalibration;
    bool IsKalibration = false;
    // Start is called before the first frame update
    void Start()
    {
       
    }

    // Update is called once per frame
    void Update()
    {
        if(checkKalibration.GetComponent<TumblerOnOff>().Status && !IsKalibration && (GetComponent<MoveArrow>().m_TargetAngles.x > 32 && GetComponent<MoveArrow>().m_TargetAngles.x < 36))
        {
            IsKalibration = true;
            EventManager.Calibrated(true);
        }
    }
}
