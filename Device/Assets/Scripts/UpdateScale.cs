using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class UpdateScale : MonoBehaviour
{

    public GameObject CotrolObject;
    public Material[] Materials;

    void Start()
    {
        GetComponent<MeshRenderer>().material = Materials[CotrolObject.GetComponent<RotateClick>().numberObject];
    }

    public void ChangeScale()
    {
        GetComponent<MeshRenderer>().material = Materials[CotrolObject.GetComponent<RotateClick>().numberObject];
    }
}
