using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.EventSystems;

public class HelpDisplay : MonoBehaviour,IPointerEnterHandler, IPointerExitHandler
{

  
    [SerializeField]
    GameObject Background;

    public void OnPointerEnter(PointerEventData eventData)//когда подсветили
    {
        GetComponent<Image>().color = (new Color(0, 3, 4)) * 0.25f;    
        Background.SetActive(true);
    }

    public void OnPointerExit(PointerEventData eventData)
    {
        GetComponent<Image>().color = Color.white * 1f;
        Background.SetActive(false);

    }
}
