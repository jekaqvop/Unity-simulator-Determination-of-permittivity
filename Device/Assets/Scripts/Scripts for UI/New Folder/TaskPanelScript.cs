using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class TaskPanelScript : MonoBehaviour
{
    [SerializeField]
    TextMeshProUGUI TaskText;
    Image Backgroungimage;

    [SerializeField]
    GameObject addButton;
    [SerializeField]
    GameObject tableButton;
    [SerializeField]
    GameObject clearTableButton;
    // Start is called before the first frame update
    void Start()
    {
        Backgroungimage = GetComponent<Image>();
        addButton.GetComponent<Image>().enabled = false;
        tableButton.GetComponent<Image>().enabled = false;
        clearTableButton.GetComponent<Image>().enabled = false;
        Backgroungimage.enabled = false;
        TaskText.enabled = false;
    }

    public void Open(string Text)
    {
        Backgroungimage.enabled = true;
        TaskText.enabled = true;
        TaskText.text = "";
        TaskText.text = Text;
        addButton.GetComponent<Image>().enabled = true;

        tableButton.GetComponent<Image>().enabled = true;
        clearTableButton.GetComponent<Image>().enabled = true;
    }

    public void Show()
    {
        Backgroungimage.enabled = true;
        TaskText.enabled = true;
        addButton.GetComponent<Image>().enabled = true;        
        tableButton.GetComponent<Image>().enabled = true;
        clearTableButton.GetComponent<Image>().enabled = true;
    }
    
    public void Close()
    {
        Backgroungimage.enabled = false;
        TaskText.enabled = false;
        addButton.GetComponent<Image>().enabled = false;
        tableButton.GetComponent<Image>().enabled = false;
        clearTableButton.GetComponent<Image>().enabled = false;
    }
}
