using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

public class ShowButtons : MonoBehaviour, IPointerEnterHandler
{
    [SerializeField]
    GameObject Elements; 
      

    void Start()
    {
        Elements.SetActive(false);
    }

    public void OnPointerEnter(PointerEventData eventData)
    {        
        Elements.SetActive(true);
    }
    
}
