using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

public class ChangeColorOnHover : MonoBehaviour, IPointerEnterHandler, IPointerExitHandler
{
    [SerializeField]   
    Color ColorHover;
    Color backColor; 

    void Start()
    {
        backColor = GetComponent<Image>().color;       
    }

    public void OnPointerEnter(PointerEventData eventData)
    {
        GetComponent<Image>().color = ColorHover;          
    }
    
    public void OnPointerExit(PointerEventData eventData)
    {
        GetComponent<Image>().color = backColor; 
    }   
}
