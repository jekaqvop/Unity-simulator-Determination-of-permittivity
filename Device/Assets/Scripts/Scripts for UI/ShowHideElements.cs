using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

public class ShowHideElements : MonoBehaviour,IPointerClickHandler,IPointerExitHandler,IPointerEnterHandler
{
    [SerializeField]
    GameObject Elements;
    public Sprite NormalSprite;
    public Sprite HilitedSprite;
    bool status = false;
    public void OnPointerClick(PointerEventData eventData)
    {        
        if (!status)
            Elements.SetActive(true);
        else
        {
            Elements.SetActive(false);
        }
    }

    public void OnPointerEnter(PointerEventData eventData)
    {
        GetComponent<Image>().sprite = HilitedSprite;
    }

    public void OnPointerExit(PointerEventData eventData)
    {
        GetComponent<Image>().sprite = NormalSprite;
    }
}
