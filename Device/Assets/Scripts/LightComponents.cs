using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class LightComponents : MonoBehaviour
{
	
		public void ChangCol()
		{
			var items = GetComponentsInChildren<Renderer>();
			foreach (Renderer joint in items)
			{
				joint.material.color = (new Color(0, 3, 4)) * 0.25f;
			}
		}

		public void ChangCol1()
		{
			var items = GetComponentsInChildren<Renderer>();
			foreach (Renderer joint in items)
			{
				joint.material.color = Color.white * 1f;
			}
		}
	

}
