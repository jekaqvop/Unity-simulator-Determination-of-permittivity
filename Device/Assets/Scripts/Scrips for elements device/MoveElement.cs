using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MoveElement : MonoBehaviour
{
  
    [SerializeField]
    GameObject Pos1;
    [SerializeField]
    GameObject Pos2;
    [SerializeField]
    public GameObject IsSeatOccupied; 
    [SerializeField]
    GameObject MiddlePosition1;
    public bool Status = false;
    bool move = false;
    public bool Move
    {
        get => move;
    }
    Vector3 startPosition;
    Vector3 needPosition;
    float speed = 0.04f;
    float offset = 0;
    Quaternion startRotation;
    Quaternion needRotaton;
    private void OnMouseDown()
    {       
        if (!Status && !IsSeatOccupied.GetComponent<IsTheSeatOccupied>().IsSeatOccupied)
        {            
            if (!move)
            {
                move = true;
                startPosition = transform.position;
                startRotation = transform.rotation;
                needPosition = Pos2.transform.position;
                needRotaton =  Pos2.transform.rotation;
                Status = true;
                IsSeatOccupied.GetComponent<IsTheSeatOccupied>().IsSeatOccupied = true;
            }          
                 
        }
        else if(Status && IsSeatOccupied.GetComponent<IsTheSeatOccupied>().IsSeatOccupied)
        {
            if (!move)
            {
                move = true;
                startPosition = transform.position;
                startRotation = transform.rotation;
                needPosition = Pos1.transform.position;
                needRotaton =  Pos1.transform.rotation;
                Status = false;                
            }           
        }
    }   

    int isMiddlePosition = 0;
    void FixedUpdate()
    {
        if (move)
        {
            if(isMiddlePosition == 0)
            {
                offset += speed;
                transform.position = Vector3.Lerp(startPosition, MiddlePosition1.transform.position, offset);
                transform.rotation = Quaternion.Lerp(startRotation, MiddlePosition1.transform.rotation, offset);
                if (offset >= 1)
                {                    
                    offset = 0;
                    isMiddlePosition = 2;
                }
            }            
            else if(isMiddlePosition == 2)
            {
                offset += speed;
                transform.position = Vector3.Lerp(transform.position, needPosition, offset);
                transform.rotation = Quaternion.Lerp(transform.rotation, needRotaton, offset);
                if (offset >= 1)
                {                    
                    offset = 0;
                    move = false;                   
                    isMiddlePosition = 0;
                    if(transform.position == Pos1.transform.position)
                        IsSeatOccupied.GetComponent<IsTheSeatOccupied>().IsSeatOccupied = false;
                }               
            }
           
        }
    }  

}

