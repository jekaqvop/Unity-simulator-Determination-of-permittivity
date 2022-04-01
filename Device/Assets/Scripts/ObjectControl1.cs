using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ObjectControl : MonoBehaviour
{

	/*    public LayerMask layer;
		bool _isDrag = false;
		float _offsetY;

		void Update()
		{
			//если нужно тащить, то тащим
			if (_isDrag)
			{
				RaycastHit hit;
				if (Physics.Raycast(Camera.main.ScreenPointToRay(Input.mousePosition), out hit, 1000f, layer.value))
				{
					Debug.Log(hit.collider.name);
					transform.position = hit.point;
					transform.Translate(Vector3.up * _offsetY);//поднимаем объект по Y, чтобы он не проваливался в пол
				}
			}
		}
		// при нажатии на объект, запоминаем его позицию по Y
		void OnMouseDown()
		{
			_offsetY = transform.position.y;
			_isDrag = true;
		}

		void OnMouseUp()
		{
			_isDrag = false;
		}*/



	public string[] tags = { "MoveObject" }; // массив тегов, объекты которых можно двигать
	public Camera _camera; // основная камера сцены
	public enum ProjectMode { Project3D = 0, Project2D = 1 };
	public ProjectMode mode = ProjectMode.Project3D;
	public float step = 6; // шаг для изменения высоты в 3D
	private Transform curObj;
	private float mass;

	void Start()
	{
		if (mode == ProjectMode.Project2D) _camera.orthographic = true;
	}

	bool GetTag(string curTag)
	{
		bool result = false;
		foreach (string t in tags)
		{
			result = true;
		}
	
		return result;
	}

	void Update()
	{
		if (Input.GetMouseButton(0)) // Удерживать правую кнопку мыши
		{
			
			if (mode == ProjectMode.Project3D)
			{
				RaycastHit hit;
				Ray ray = _camera.ScreenPointToRay(Input.mousePosition);
				if (Physics.Raycast(ray, out hit))
				{

					Debug.Log(hit.transform.tag + " tag");
					Debug.Log(hit.transform.name.ToString() + " name");
					curObj = hit.transform;
					if (GetTag(hit.transform.tag) && hit.rigidbody && !curObj)
					{
						curObj.gameObject.AddComponent<Rigidbody>();

                        mass = curObj.GetComponent<Rigidbody>().mass; // запоминаем массу объекта
						curObj.GetComponent<Rigidbody>().mass = 0.0001f; // убираем массу, чтобы не сбивать другие объекты
						curObj.GetComponent<Rigidbody>().useGravity = false; // убираем гравитацию
						curObj.GetComponent<Rigidbody>().freezeRotation = true; // заморозка вращения
                        //curObj.position += new Vector3(0, 0.5f, 0); // немного приподымаем выбранный объект
						
					}
				}

                if (curObj)
                {
                   
                    Vector3 mousePosition = _camera.ScreenToWorldPoint(new Vector3(Input.mousePosition.x, Input.mousePosition.y, _camera.transform.position.y));
                    curObj.GetComponent<Rigidbody>().MovePosition(new Vector3(mousePosition.x, curObj.position.y + Input.GetAxis("Mouse ScrollWheel") * step, mousePosition.z));
                }
            }
			
		}
		
	}

}
