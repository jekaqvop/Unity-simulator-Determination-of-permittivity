using System.Collections;
using System.Collections.Generic;
using System.Numerics;
using TMPro;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

public class AddButtonScript : MonoBehaviour, IPointerClickHandler, IPointerExitHandler, IPointerEnterHandler
{
    [SerializeField]
    public GameObject Button;
    Image Backgroungimage;
    Image InputBackgroungimage;
    [SerializeField]
    TextMeshProUGUI Placeholder;
    [SerializeField]
    TextMeshProUGUI InputText;
    [SerializeField]
    RectTransform PracticText;
    [SerializeField]
    TMP_InputField Input;
    [SerializeField]
    TableScript table;
    int counter = 0;

    public void OnPointerClick(PointerEventData eventData)
    {
        counter++;
        if (counter % 2 == 1)
        {          
            PracticText.localScale = new UnityEngine.Vector3(0.13f, 1.5f, 0.7993644f);
            Input.enabled = true;
            InputBackgroungimage.enabled = true;
            InputBackgroungimage.enabled = true;
            Placeholder.enabled = true;
            InputText.enabled = true;
            Input.text = "";
        }
        else
        {
            PracticText.localScale = new UnityEngine.Vector3(0.2f, 1.5f, 0.7993644f);
            Input.enabled = false;
            InputBackgroungimage.enabled = false;
            Placeholder.enabled = false;
            InputText.enabled = false;
            table.Write();
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
        Backgroungimage = Button.GetComponent<Image>();
        InputBackgroungimage = Input.GetComponent<Image>();
        Input.enabled = false;
        InputBackgroungimage.enabled = false;
        Placeholder.enabled = false;
        InputText.enabled = false;
    }
}
