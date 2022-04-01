using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class RotateClick : MonoBehaviour
{
    public GameObject[] gameObjects;
    [SerializeField]
    public int numberObject = 0;

    private void OnMouseDown()
    {        
        numberObject++;
        if (numberObject == gameObjects.Length)
            numberObject = 0;
        transform.position = gameObjects[numberObject].transform.position;
        transform.rotation = gameObjects[numberObject].transform.rotation;            
    }
}
