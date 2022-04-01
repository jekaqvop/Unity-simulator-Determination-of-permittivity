using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

public class ClearTable : MonoBehaviour, IPointerClickHandler, IPointerExitHandler, IPointerEnterHandler
{
    Image Backgroungimage;
    [SerializeField]
    TableScript Table;
    public void OnPointerClick(PointerEventData eventData)
    {
        Table.Clear();
    }
    // Start is called before the first frame update
    public void OnPointerEnter(PointerEventData eventData)
    {
        Backgroungimage.color = new Color(255, 147, 0, 255);
    }
    public void OnPointerExit(PointerEventData eventData)
    {
        Backgroungimage.color = new Color(255, 255, 255, 255);
    }
    void Start()
    {
        Backgroungimage = GetComponent<Image>();
    }

}
