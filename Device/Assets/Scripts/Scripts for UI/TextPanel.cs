using System;
using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class TextPanel : MonoBehaviour
{
    [SerializeField]
    TextMeshProUGUI text;
    [SerializeField]
    GameObject Footer;
    Image img;

    public void Open(string message = "")
    {
       
        if (message.Length != 0)
        {
           
            text.text = message;
        }
        Footer.SetActive(true);
        
    }

    public void Close()
    {
        Footer.SetActive(false);
    }
}
