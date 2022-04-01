using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System;

public class EventManager : MonoBehaviour {

    public delegate void SwitchHandler(bool work);//включение установки/tumbler
    public delegate void HandlerValues(bool work);//запись в таблицу
    public delegate void Ocupatedcoil(bool work);//установка катушки
    public delegate void Ocupatedsample(bool work);//установка образца
    public delegate void Controlfrequency(bool work);//установка частоты
    public delegate void ControlCalibrated(bool work);//установка калибровки
    public delegate void ControlMeasurement(bool work);//установка тумблера на измерение

    public static event SwitchHandler Switch;//переключение
    public static event HandlerValues WritingValue;//запись в табл
    public static event Ocupatedcoil ocupatedCoil;//установка катушки
    public static event Ocupatedsample ocupatedSample;//установка образца
    public static event Controlfrequency controlFrequency;//установка частоты
    public static event ControlCalibrated controlCalibrated;//установка калибровки
    public static event ControlMeasurement controlMeasurement;//установка тумблера на измерение
   
    private void Start()
    {
        try{
            Switch(false);
        }
        catch(Exception e){
            Debug.Log("Swich(false) Exeption" + e.Message);
        }
        
    }

    public static void OcupatedSample(bool work)
    {
        
        try{
            ocupatedSample(work);
        }
        catch(Exception e){
            Debug.Log($"ocupatedSample({work}) Exeption " + e.Message);
        }
    }
    
    public static void ControlFrequency(bool work)
    {
        
          try{
            controlFrequency(work);
        }
        catch(Exception e){
            Debug.Log($"controlFrequency({work}) Exeption " + e.Message);
        }
    }

    public static void OcupatedCoil(bool work)
    {      
          try{
            ocupatedCoil(work);
        }
        catch(Exception e){
            Debug.Log($"controlFrequency({work}) Exeption " + e.Message);
        }
    }

    public static void Calibrated(bool work)
    {
        try{
            controlCalibrated(work);
        }
        catch(Exception e){
            Debug.Log($"controlCalibrated({work}) Exeption " + e.Message);
        }
    }
    
    public static void Measurement(bool work)
    {
        try{
            controlMeasurement(work);
        }
        catch(Exception e){
            Debug.Log($"controlMeasurement({work}) Exeption " + e.Message);
        }
    }

    public static void SwitchWork(bool work)//просто метод, который будет вызвать событие
    {
        try{
            Switch(work);
        }
        catch(Exception e){
            Debug.Log($"Switch({work}) Exeption " + e.Message);
        }
    }

    public static void WriteValue(bool work)
    {        
         try{
            WritingValue(work);
        }
        catch(Exception e){
            Debug.Log($"WritingValue({work}) Exeption " + e.Message);
        }
    }

}
