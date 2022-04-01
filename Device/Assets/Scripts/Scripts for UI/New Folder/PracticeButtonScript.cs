using System;
using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;
using TMPro;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

public class PracticeButtonScript : MonoBehaviour, IPointerClickHandler
{  
    [SerializeField]
    TaskPanelScript Tasks;
    [SerializeField]
    TextMeshProUGUI TasksText;
    [SerializeField]
    Color color;    
    [SerializeField]
    GameObject[] gameObjects; 
    [SerializeField]
    GameObject uiButton; 
    [SerializeField]
    GameObject vilka; 
    int counter = 0; 
    string strColor = "000000";  
    bool OnPractic = false;

    void Start(){
        strColor = ColorUtility.ToHtmlStringRGB(color);
         EventManager.ocupatedCoil += Task1;
    }

    public void OnPointerClick(PointerEventData eventData)
    {
        counter++;
        if (counter % 2 == 1)
        {
            OnPractic = true;
            Tasks.Show();            
        }
            
        else
        {
            Tasks.Close();
            OnPractic = false;            
        }
        
        if(counter == 1)
        {
            Tasks.Open($"Установите <b><color=#{strColor}>катушку индуктивности 250КГц</color></b>, нажав на неё");
            useLimitation(0);
            vilka.GetComponent<BoxCollider>().enabled = false;
        }
            
        //Tasks.Open($"Включите установку, нажав кнопку <b><color=#{strColor}>СЕТЬ</color></b>");      
    }    

    private void useLimitation(params int[] numberObject){
        foreach(GameObject gameObject in gameObjects){
                gameObject.GetComponent<BoxCollider>().enabled = false;
            }
            uiButton.SetActive(true);
            foreach(int i in numberObject)
                if(i < gameObjects.Length)
                    gameObjects[i].GetComponent<BoxCollider>().enabled = true;
                else if(i == gameObjects.Length)
                    uiButton.SetActive(false);
                else if(i == -1){
                    foreach(GameObject gameObject in gameObjects){
                        gameObject.GetComponent<BoxCollider>().enabled = true;
                    }
                    uiButton.SetActive(false);
                    GetComponent<BoxCollider>().enabled = true;
                }
    }
    private void Task1(bool work)
    {
        if (work && OnPractic)
        {
            Tasks.Open($"Включите установку, нажав кнопку <b><color=#{strColor}>СЕТЬ</color></b>");
            EventManager.ocupatedCoil -= Task1;
            EventManager.Switch += Task2;
            useLimitation(15);
        }       
    }

    private void Task2(bool work)
    {
        if (work && OnPractic)
        {            
            Tasks.Open($"Откалибруйте прибор, переключив тумблер <b><color=#{strColor}>\"измерение-калибровка\"</color></b>в положение калибровка и вращая крайнюю правую ручку, находящуюся под Q-метром");
            EventManager.Switch -= Task2;
            EventManager.controlCalibrated += Task3;
            useLimitation(7, 14);
        }
    }

    private void Task3(bool work)
    {
        if (work && OnPractic)
        {         
            Tasks.Open($"Переключите тумблер <b><color=#{strColor}>\"измерение-калибровка\"</color></b> в положение измерение");
            EventManager.controlCalibrated -= Task3;
            EventManager.controlMeasurement += Task4;
            useLimitation(14);
        }
    }

    private void Task4(bool work)
    {
        if(work && OnPractic)
        {
            Tasks.Open($"3апишите название материала <b><color=#{strColor}>1-го образца </color></b>");
            EventManager.controlMeasurement -= Task4;
            EventManager.WritingValue += Task51;
            useLimitation(17);
        }
    }

    private void Task51(bool work)
    {
        if(work && OnPractic)
        {
            Tasks.Open($"установите образец между электродами, нажав на него лкм");
            EventManager.WritingValue -= Task51;
            EventManager.ocupatedSample += Task5;
            useLimitation(2);
        }
    }
    
    private void Task5(bool work)
    {
        if (work && OnPractic)
        {
            Tasks.Open($"сомкните <b><color=#{strColor}>Электроды</color></b> так, чтобы они обхватили образец(не должно быть пустого пространства) и 3апишите расстояние в таблицу");
            EventManager.ocupatedSample -= Task5;
            EventManager.WritingValue += Task6;
            useLimitation(16, 17);
        }
    }

    private void Task6(bool work)
    {
        if (work && OnPractic)
        {          
            Tasks.Open($"настройте <b><color=#{strColor}>частоту</color></b> такую же, как указана на установленной <b><color=#{strColor}>катушке индуктивноси</color></b>.");
            EventManager.WritingValue -= Task6;
            EventManager.controlFrequency += Task7;
            useLimitation(9, 10);
        }
    }

    private void Task7(bool work)
    {
        if(work && OnPractic)
        {
            Tasks.Open($"настройте <b><color=#{strColor}>ёмкость</color></b> так, чтобы стрелка на Q-метре максимально откланилась(Вращайте ручку, над которой написана \"ёмкость\" и нажимая кнопки под ней). 3апишите полученную ёмкость в таблицу");           
            EventManager.controlFrequency -= Task7;
            EventManager.WritingValue += Task8;
            useLimitation(13, 11, 12, 17);
        }
    
    }

    private void Task8(bool work)
    {
        if (work && OnPractic)
        {
            Tasks.Open($"извлеките <b><color=#{strColor}> образец </color></b>");
            
            EventManager.WritingValue -= Task8;
            EventManager.ocupatedSample += Task8_111;
            useLimitation(2);
        }
    }

    private void Task8_111(bool work)
    {
        if (!work && OnPractic)
        {
            Tasks.Open($"повторите настройку предыдущего задания. результат <b><color=#{strColor}>ёмкости</color></b> 3апишите в таблицу");
            
            EventManager.ocupatedSample -= Task8_111;
            EventManager.WritingValue += Task9_0;
            useLimitation(13, 11, 12, 17);
        }
    }
    
    private void Task9_0(bool work)
    {
        if (work && OnPractic)
        {
            Tasks.Open($"3апишите название материала следующего<b><color=#{strColor}> образца </color></b> ");            
            EventManager.WritingValue -= Task9_0;
            EventManager.WritingValue += Task9;
            useLimitation(17);
        }
    }

    private void Task9(bool work)
    {
        if (work && OnPractic)
        {
            Tasks.Open($"Установите <b><color=#{strColor}> образец </color></b> его между электродами, нажав на него ЛКМ");            
            EventManager.WritingValue -= Task9;
            EventManager.ocupatedSample += Task1_5;
            useLimitation(3);
        }
    }
    
        private void Task1_5(bool work)
    {
        if (work && OnPractic)
        {
            Tasks.Open($"сомкните Электроды так, чтобы они обхватили образец(не должно быть пустого пространства) и 3апишите расстояние в таблицу");
            EventManager.ocupatedSample -= Task1_5;
            EventManager.WritingValue += Task1_7;
            useLimitation(16, 17);
        }
    }

    

    private void Task1_7(bool work)
    {
        if(work && OnPractic)
        {
            Tasks.Open($"настройте <b><color=#{strColor}>ёмкость</color></b> так, чтобы стрелка на Q-метре максимально откланилась(Вращайте ручку, над которой написана \"ёмкость\" и нажимая кнопки под ней). 3апишите полученную ёмкость в таблицу");           
            EventManager.WritingValue -= Task1_7;
            EventManager.WritingValue += Task1_8;
            useLimitation(13, 11, 12, 17);
        }
    
    }

    private void Task1_8(bool work)
    {
        if (work && OnPractic)
        {
            Tasks.Open($"извлеките <b><color=#{strColor}> образец");
            
            EventManager.WritingValue -= Task1_8;
            EventManager.ocupatedSample += Task1_8_11;
            useLimitation(3);
        }
    }

    private void Task1_8_11(bool work)
    {
        if (!work && OnPractic)
        {
            Tasks.Open($"повторите настройку предыдущего задания. результат <b><color=#{strColor}>ёмкости</color></b> 3апишите в таблицу");
            
            EventManager.ocupatedSample -= Task1_8_11;
            EventManager.WritingValue += Task2_9;
            useLimitation(13, 11, 12, 17);
        }
    }
  
        private void Task2_9(bool work)
    {
        if (work && OnPractic)
        {
            Tasks.Open($"3апишите название материала следующего<b><color=#{strColor}> образца </color></b>");            
            EventManager.WritingValue -= Task2_9;
            EventManager.WritingValue += Task2_91;
            useLimitation(17);
        }
    }
    
    private void Task2_91(bool work)
    {
        if (work && OnPractic)
        {
            Tasks.Open($"Установите <b><color=#{strColor}> образец </color></b> его между электродами, нажав на него ЛКМ");            
            EventManager.WritingValue -= Task2_91;
            EventManager.ocupatedSample += Task2_5;
            useLimitation(4);
        }
    }
    
    private void Task2_5(bool work)
    {
        if (work && OnPractic)
        {
            Tasks.Open($"сомкните Электроды так, чтобы они обхватили образец(не должно быть пустого пространства) и 3апишите расстояние в таблицу");
            EventManager.ocupatedSample -= Task2_5;
            EventManager.WritingValue += Task2_7;
            useLimitation(16, 17);
        }
    }
   
    private void Task2_7(bool work)
    {
        if(work && OnPractic)
        {
            Tasks.Open($"настройте <b><color=#{strColor}>ёмкость</color></b> так, чтобы стрелка на Q-метре максимально откланилась(Вращайте ручку, над которой написана \"ёмкость\" и нажимая кнопки под ней). 3апишите полученную ёмкость в таблицу");           
            EventManager.WritingValue -= Task2_7;
            EventManager.WritingValue += Task2_8;
            useLimitation(13, 11, 12, 17);
        }
    
    }

    private void Task2_8(bool work)
    {
        if (work && OnPractic)
        {
            Tasks.Open($"извлеките <b><color=#{strColor}> образец </color></b>");
            
            EventManager.WritingValue -= Task2_8;
            EventManager.ocupatedSample += Task2_8_11;
            useLimitation(4);
        }
    }

    private void Task2_8_11(bool work)
    {
        if (!work && OnPractic)
        {
            Tasks.Open($"повторите настройку предыдущего задания. результат <b><color=#{strColor}>ёмкости</color></b> 3апишите в таблицу");
            
            EventManager.ocupatedSample -= Task2_8_11;
            EventManager.WritingValue += Task3_10;
            useLimitation(13, 11, 12, 17);
        }
    }

    private void Task3_10(bool work)
    {
        if (work && OnPractic)
        {
            Tasks.Open($"выключите установку, нажав кнопку <b><color=#{strColor}>СЕТЬ</color></b>");

            EventManager.WritingValue -= Task3_10;
            EventManager.Switch += Task4_2_2;
            useLimitation(15);
        }
    }   
    
    private void Task4_2_2(bool work)
    {
        if (!work)
        {
            Tasks.Open($"извлеките <b><color=#{strColor}>катушку индуктивности</color></b>, нажав на неё ЛКМ");
            EventManager.Switch -= Task4_2_2;
            EventManager.ocupatedCoil += Task4_3_3;
            useLimitation(0);
        }
    }

    private void Task4_3_3(bool work)
    {
        if (!work)
        {
            Tasks.Open($"Установите вторую <b><color=#{strColor}>катушку индуктивности</color></b>, нажав на неё ЛКМ");
            EventManager.ocupatedCoil -= Task4_3_3;
            EventManager.ocupatedCoil += Task4_1;
            useLimitation(1);
        }
    }

    private void Task4_1(bool w)
    {
        if (w)
        {
            Tasks.Open($"Включите установку, нажав кнопку <b><color=#{strColor}>СЕТЬ</color></b>");
            EventManager.ocupatedCoil -= Task4_1;
            EventManager.Switch += Task20_4;
            useLimitation(15);
        }       
    }
  
    private void Task20_4(bool work)
    {
        if(work && OnPractic)
        {
            Tasks.Open($"3апишите название материала <b><color=#{strColor}>1-го образца </color></b>");
            EventManager.controlMeasurement -= Task20_4;
            EventManager.WritingValue += Task20_51;
            useLimitation(17);
        }
    }

    private void Task20_51(bool work)
    {
        if(work && OnPractic)
        {
            Tasks.Open($"установите образец между электродами, нажав на него лкм");
            EventManager.WritingValue -= Task20_51;
            EventManager.ocupatedSample += Task20_5;
            useLimitation(2);
        }
    }
    
    private void Task20_5(bool work)
    {
        if (work && OnPractic)
        {
            Tasks.Open($"сомкните <b><color=#{strColor}>Электроды</color></b> так, чтобы они обхватили образец(не должно быть пустого пространства) и 3апишите расстояние в таблицу");
            EventManager.ocupatedSample -= Task20_5;
            EventManager.WritingValue += Task20_6;
            useLimitation(16, 17);
        }
    }

    private void Task20_6(bool work)
    {
        if (work && OnPractic)
        {          
            Tasks.Open($"настройте <b><color=#{strColor}>частоту</color></b> такую же, как указана на установленной <b><color=#{strColor}>катушке индуктивноси</color></b>.");
            EventManager.WritingValue -= Task20_6;
            EventManager.controlFrequency += Task20_7;
            useLimitation(9, 10);
        }
    }

    private void Task20_7(bool work)
    {
        if(work && OnPractic)
        {
            Tasks.Open($"настройте <b><color=#{strColor}>ёмкость</color></b> так, чтобы стрелка на Q-метре максимально откланилась(Вращайте ручку, над которой написана \"ёмкость\" и нажимая кнопки под ней). 3апишите полученную ёмкость в таблицу");           
            EventManager.controlFrequency -= Task20_7;
            EventManager.WritingValue += Task20_8;
            useLimitation(13, 11, 12, 17);
        }
    
    }

    private void Task20_8(bool work)
    {
        if (work && OnPractic)
        {
            Tasks.Open($"извлеките <b><color=#{strColor}> образец </color></b>");
            
            EventManager.WritingValue -= Task20_8;
            EventManager.ocupatedSample += Task20_8_111;
            useLimitation(2);
        }
    }

    private void Task20_8_111(bool work)
    {
        if (!work && OnPractic)
        {
            Tasks.Open($"повторите настройку предыдущего задания. результат <b><color=#{strColor}>ёмкости</color></b> 3апишите в таблицу");
            
            EventManager.ocupatedSample -= Task20_8_111;
            EventManager.WritingValue += Task20_9_0;
            useLimitation(13, 11, 12, 17);
        }
    }
    
    private void Task20_9_0(bool work)
    {
        if (work && OnPractic)
        {
            Tasks.Open($"3апишите название материала следующего<b><color=#{strColor}> образца </color></b> ");            
            EventManager.WritingValue -= Task20_9_0;
            EventManager.WritingValue += Task20_9;
            useLimitation(17);
        }
    }

    private void Task20_9(bool work)
    {
        if (work && OnPractic)
        {
            Tasks.Open($"Установите <b><color=#{strColor}> образец </color></b> его между электродами, нажав на него ЛКМ");            
            EventManager.WritingValue -= Task20_9;
            EventManager.ocupatedSample += Task20_1_5;
            useLimitation(3);
        }
    }
    
        private void Task20_1_5(bool work)
    {
        if (work && OnPractic)
        {
            Tasks.Open($"сомкните Электроды так, чтобы они обхватили образец(не должно быть пустого пространства) и 3апишите расстояние в таблицу");
            EventManager.ocupatedSample -= Task20_1_5;
            EventManager.WritingValue += Task20_1_7;
            useLimitation(16, 17);
        }
    }

    

    private void Task20_1_7(bool work)
    {
        if(work && OnPractic)
        {
            Tasks.Open($"настройте <b><color=#{strColor}>ёмкость</color></b> так, чтобы стрелка на Q-метре максимально откланилась(Вращайте ручку, над которой написана \"ёмкость\" и нажимая кнопки под ней). 3апишите полученную ёмкость в таблицу");           
            EventManager.WritingValue -= Task20_1_7;
            EventManager.WritingValue += Task20_1_8;
            useLimitation(13, 11, 12, 17);
        }
    
    }

    private void Task20_1_8(bool work)
    {
        if (work && OnPractic)
        {
            Tasks.Open($"извлеките <b><color=#{strColor}> образец");
            
            EventManager.WritingValue -= Task20_1_8;
            EventManager.ocupatedSample += Task20_1_8_11;
            useLimitation(3);
        }
    }

    private void Task20_1_8_11(bool work)
    {
        if (!work && OnPractic)
        {
            Tasks.Open($"повторите настройку предыдущего задания. результат <b><color=#{strColor}>ёмкости</color></b> 3апишите в таблицу");
            
            EventManager.ocupatedSample -= Task20_1_8_11;
            EventManager.WritingValue += Task20_2_9;
            useLimitation(13, 11, 12, 17);
        }
    }
  
        private void Task20_2_9(bool work)
    {
        if (work && OnPractic)
        {
            Tasks.Open($"3апишите название материала следующего<b><color=#{strColor}> образца </color></b>");            
            EventManager.WritingValue -= Task20_2_9;
            EventManager.WritingValue += Task20_2_91;
            useLimitation(17);
        }
    }
    
    private void Task20_2_91(bool work)
    {
        if (work && OnPractic)
        {
            Tasks.Open($"Установите <b><color=#{strColor}> образец </color></b> его между электродами, нажав на него ЛКМ");            
            EventManager.WritingValue -= Task20_2_91;
            EventManager.ocupatedSample += Task20_2_5;
            useLimitation(4);
        }
    }
    
    private void Task20_2_5(bool work)
    {
        if (work && OnPractic)
        {
            Tasks.Open($"сомкните Электроды так, чтобы они обхватили образец(не должно быть пустого пространства) и 3апишите расстояние в таблицу");
            EventManager.ocupatedSample -= Task20_2_5;
            EventManager.WritingValue += Task20_2_7;
            useLimitation(16, 17);
        }
    }
   
    private void Task20_2_7(bool work)
    {
        if(work && OnPractic)
        {
            Tasks.Open($"настройте <b><color=#{strColor}>ёмкость</color></b> так, чтобы стрелка на Q-метре максимально откланилась(Вращайте ручку, над которой написана \"ёмкость\" и нажимая кнопки под ней). 3апишите полученную ёмкость в таблицу");           
            EventManager.WritingValue -= Task20_2_7;
            EventManager.WritingValue += Task20_2_8;
            useLimitation(13, 11, 12, 17);
        }
    
    }

    private void Task20_2_8(bool work)
    {
        if (work && OnPractic)
        {
            Tasks.Open($"извлеките <b><color=#{strColor}> образец </color></b>");
            
            EventManager.WritingValue -= Task20_2_8;
            EventManager.ocupatedSample += Task20_2_8_11;
            useLimitation(4);
        }
    }

    private void Task20_2_8_11(bool work)
    {
        if (!work && OnPractic)
        {
            Tasks.Open($"повторите настройку предыдущего задания. результат <b><color=#{strColor}>ёмкости</color></b> 3апишите в таблицу");
            
            EventManager.ocupatedSample -= Task20_2_8_11;
            EventManager.WritingValue += Task6_10;
            useLimitation(13, 11, 12, 17);
        }
    }

    private void Task6_10(bool work)
    {
        if (work && OnPractic)
        {
            Tasks.Open($"выключите установку, нажав кнопку <b><color=#{strColor}>СЕТЬ</color></b>");

            EventManager.WritingValue -= Task6_10;
            EventManager.Switch += Final;
            useLimitation(15);
        }
    }


    private void Final(bool work)
    {
        if(!work)
        {            
            Tasks.Open($"Работа окончена ознакомьтесь с результатами в <b><color=#{strColor}>таблице</color></b>");
            useLimitation(-1);
        }
    }

 
}
