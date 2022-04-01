using System.Collections;
using System.Collections.Generic;
using UnityEditor;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;
using TMPro;

public class ElementsButtonsScript : MonoBehaviour, IPointerExitHandler, IPointerEnterHandler
{
    [SerializeField]
    TextPanel Footer;
    string Message;
    public int Number;
    public Sprite NormalSprite;
    public Sprite HilitedSprite;
    [SerializeField]
    TextMeshProUGUI ButtonText;
    [SerializeField]
    Color ColorHover;
    [SerializeField]
    Color ColorMainText;   
    Color backColor;
    string strColor = "000000";  
    void Start()
    {
        strColor = ColorUtility.ToHtmlStringRGB(ColorMainText);
        switch (Number)
        {
            case 1: { Message = $"<b><color=#{strColor}>Панель управления</color></b> используется для управления установкой."; break; }
            case 2: { Message = $"<b><color=#{strColor}>шкалы расстояния между электродами</color></b> используются для определения толщины образца."; break; }
            case 3: { Message = $"<b><color=#{strColor}>Полный Вид</color></b> - общий вид на всю установку."; break; }
            case 4: { Message = $"<b><color=#{strColor}>Электрический экран</color></b> предназначен для для снижения электромагнитных полей."; break; }
            case 5: { Message = $"<b><color=#{strColor}>ящик</color></b> хранит образцы диэлектриков и катушки индуктивности."; break; }
            case 6: { Message = $"<b><color=#{strColor}>Электрический кабель 'сеть'</color></b> используются для подключения установки к электрической сети."; break; }            
            default:
                Message = "";
                break;
        }
        GetComponent<Outline>().enabled = false;
        backColor = ButtonText.color;
    }  
    
    public void OnPointerEnter(PointerEventData eventData)
    {
        GetComponent<Outline>().enabled = true;
        ButtonText.color = ColorHover;
        Footer.Open(Message);
    }

    public void OnPointerExit(PointerEventData eventData)
    {
        GetComponent<Outline>().enabled = false;
        ButtonText.color = backColor;
        //Footer.Close();
    }   
    
}
