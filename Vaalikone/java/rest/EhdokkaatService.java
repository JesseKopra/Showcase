package rest;

import java.util.List;
import java.net.URI;
import java.net.URISyntaxException;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;
import javax.persistence.TypedQuery;
import javax.servlet.http.HttpSession;
import javax.ws.rs.FormParam;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import persist.Kayttajatunnukset;
import persist.Vastaukset;

@Path("/ehdokkaatservice")
public class EhdokkaatService {
	
	@POST
	@Path("/ehdokaslogin")
	public Response login(@FormParam("username") String username,@FormParam("password") String password,
			@FormParam("ehdokasId") int ehdokasId) throws URISyntaxException
    {
		
		EntityManagerFactory emf = Persistence.createEntityManagerFactory("vaalikones");
		EntityManager em = emf.createEntityManager();
		try{
			EntityTransaction entr=em.getTransaction();
            entr.begin();
           

            TypedQuery<Kayttajatunnukset> query = em.createNamedQuery("kayttajatunnukset.login", Kayttajatunnukset.class);
    		query.setParameter("username", username);
    		query.setParameter("password", password);
    		query.setParameter("ehdokasId", ehdokasId);
        try{ 
            //Kayttajatunnukset e = query.getSingleResult();
            //return true;
            Kayttajatunnukset user = new Kayttajatunnukset(username, password);
            //int ehdokasId = user.getEhdokasId();
            
            java.net.URI location = new java.net.URI("../ehdokas.jsp?msg="+ehdokasId);
            return Response.temporaryRedirect(location).build();
        }catch(javax.persistence.NoResultException e)
        {
            //return false;
        	java.net.URI location = new java.net.URI("../admin.jsp?msg=failed");
            return Response.temporaryRedirect(location).build();
        }
        }
        finally{
        em.close();
        }

    }
	
}
