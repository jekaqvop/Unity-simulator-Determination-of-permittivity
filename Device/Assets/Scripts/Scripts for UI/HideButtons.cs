using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

public class HideButtons : MonoBehaviour, IPointerExitHandler
{
    [SerializeField]
    GameObject Elements;
    public void OnPointerExit(PointerEventData eventData)
    {
        Elements.SetActive(false);
    }
}
