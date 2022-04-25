package app;

import java.io.IOException;
import java.io.PrintWriter;
import java.net.URISyntaxException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.Invocation.Builder;
import javax.ws.rs.core.Response;
import javax.ws.rs.client.WebTarget;

import persist.*;

/**
 * Servlet implementation class VastausClient
 */
@WebServlet("/vastausclient")
public class VastausClient extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public VastausClient() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String e_Id=request.getParameter("e_Id");
        String k_Id=request.getParameter("k_Id");
       
       
        if (e_Id!=null && k_Id!=null) {
        	removeAnswer(e_Id, k_Id); 
        }
        
        response.sendRedirect("./ehdokas.jsp?msg="+e_Id);
	}
	
    private boolean removeAnswer(String e_Id, String k_Id) {
        String uri = "http://127.0.0.1:8080/rest/answerservice/remove/"+e_Id+"/"+k_Id;

        Client asiakas=ClientBuilder.newClient();
        WebTarget wt=asiakas.target(uri);
        Builder b=wt.request();
       
        boolean ok=b.delete(Boolean.class);
        return ok;
    }

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
