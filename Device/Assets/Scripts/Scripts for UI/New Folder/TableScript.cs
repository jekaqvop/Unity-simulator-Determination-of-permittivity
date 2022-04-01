using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;
using System;

public class TableScript : MonoBehaviour
{
    int Counter = 0;
    [SerializeField]
    TMP_InputField Input;
    [SerializeField]
    TextMeshProUGUI[] ArrayTextMeshs;
    float E0S = Mathf.PI * Mathf.Pow(0.025f, 2) * 1.0006f;
    
    int counter1 = 4;
    int counter2 = 1;
   
    public void Write()
    {
        try{
                string input;
                input = Input.text;
                if(input!="")
                {     
                   
                    ArrayTextMeshs[Counter].text = input.Replace(".", ",");
                    
                    if(counter1 == Counter)
                    {              
                        counter1 += 6;          
                        Counter++;                        
                        float C1C2d = float.Parse(ArrayTextMeshs[Counter - 3].text) * 0.001f * (float.Parse(ArrayTextMeshs[Counter - 2].text) - float.Parse(ArrayTextMeshs[Counter - 1].text));
                        ArrayTextMeshs[Counter].text = String.Format("{0:f}", (1 + C1C2d / E0S));  
                    }                  
                    else if(counter2 == Counter)
                    {
                        counter2 += 6;
                        Counter++;
                        ArrayTextMeshs[Counter].text = String.Format("{0:f}", (float.Parse(ArrayTextMeshs[Counter - 1].text) - 13f));
                    }               
                    EventManager.WriteValue(true);
        
       
                }
            }
            catch{
                Debug.Log("write table error");
            }
        

    }
    
    public void PlusOneCounter(bool i) => Counter++;

    public void Clear()
    {
        foreach(TextMeshProUGUI item in ArrayTextMeshs)
            item.text = "";        
    }
    
    private void Start()
    {
        Clear();
        EventManager.WritingValue += PlusOneCounter;
    }
}
