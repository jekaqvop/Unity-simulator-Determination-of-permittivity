using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

public class ShowHideTable : MonoBehaviour, IPointerClickHandler, IPointerExitHandler, IPointerEnterHandler
{
    [SerializeField]
    public GameObject Button;
    Image Backgroungimage;
    int counter = 0;
    [SerializeField]
    Image ResultTable;
    public void OnPointerClick(PointerEventData eventData)
    {
        counter++;
        if (counter % 2 == 1)
        {

            ResultTable.transform.gameObject.SetActive(true);
        }
        else
        {
            Backgroungimage.color = new Color(255, 255, 255, 255);
            ResultTable.transform.gameObject.SetActive(false);
        }
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
        ResultTable.transform.gameObject.SetActive(false);
        Backgroungimage = Button.GetComponent<Image>();
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
