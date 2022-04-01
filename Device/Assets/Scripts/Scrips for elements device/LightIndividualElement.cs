using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System.IO;
using System.Collections;
using System.Runtime.Serialization.Formatters.Binary;
using System.Runtime.Serialization;

public class LightIndividualElement : MonoBehaviour
{
    public bool status = false;
    public Material NewMaterial;  
    public Texture defaultTexture; 
    public bool ChangeTexture = false;

    private void OnMouseOver() {
        if(!status)
        {
            if(ChangeTexture)
                GetComponent<MeshRenderer>().material.mainTexture = null;
            GetComponent<MeshRenderer>().material.color = NewMaterial.color;
        }            
    }    

    private void OnMouseExit() {
        GetComponent<MeshRenderer>().material.color = Color.white;        
        GetComponent<MeshRenderer>().material.mainTexture = defaultTexture;
        status = false;
    }   
}
