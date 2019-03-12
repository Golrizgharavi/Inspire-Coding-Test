using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace InspireWebApplication
{
    public partial class GetData : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            //email Subscription
            if (Request.Params["q"] != null && Request.Params["q"] == "1")
            {

                string email = Request.Params["e"].ToString();


                //do stuff



                string Json = "{\"s\":1}";
                Response.Clear();
                Response.ContentType = "application/json";
                Response.Write(Json);
                Response.End();

            }
        }
    }
}