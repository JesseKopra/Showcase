package rest;

import java.net.URISyntaxException;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.Query;
import javax.persistence.TypedQuery;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.FormParam;
import javax.ws.rs.POST;

import javax.ws.rs.PUT;

import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.Response;

import persist.Vastaukset;
import persist.VastauksetPK;

@Path("/answerservice")
public class AnswerService {

	@POST
	@Path("/add")
	public Response addAnswer(@FormParam("e_id") int e_id, @FormParam("k_id") int k_id, @FormParam("vastaus") int vastaus) throws URISyntaxException{
		EntityManagerFactory emf=Persistence.createEntityManagerFactory("vaalikones");
		EntityManager em=emf.createEntityManager();
		
		VastauksetPK vpk = new VastauksetPK(e_id, k_id);
        Vastaukset v = em.find(Vastaukset.class, vpk);
		Vastaukset vs = new Vastaukset(vpk);
        vs.setVastaus(vastaus);
        
            em.getTransaction().begin();
            em.remove(vs);
            em.getTransaction().commit();
            em.getTransaction().begin();
            em.persist(vs);
            em.getTransaction().commit();
            
        try{
            java.net.URI location = new java.net.URI("../ehdokas.jsp?msg="+e_id);
            return Response.temporaryRedirect(location).build();
        }catch(javax.persistence.NoResultException e)
        {
            //return false;
            java.net.URI location = new java.net.URI("../ehdokas.jsp?msg=failed");
            return Response.temporaryRedirect(location).build();
        }
        finally{
        em.close();
        }
	}
	
	@POST
	@Path("/muokkaa")
	public Response muokkaaVastausta(@FormParam("e_id") int e_id, @FormParam("k_id") int k_id, @FormParam("vastaus") int vastaus) throws URISyntaxException {
		EntityManagerFactory emf=Persistence.createEntityManagerFactory("vaalikones");
		EntityManager em=emf.createEntityManager();
		VastauksetPK vpk = new VastauksetPK(e_id, k_id);
        Vastaukset v=em.find(Vastaukset.class, vpk);
        v.setVastaus(vastaus);
        
        if (v!=null) {
            em.getTransaction().begin();
            em.remove(v);
            em.getTransaction().commit();
            em.getTransaction().begin();
            em.persist(v);
            em.getTransaction().commit();
        }
        try{
            
            java.net.URI location = new java.net.URI("../ehdokas.jsp?msg="+e_id);
            return Response.temporaryRedirect(location).build();
        }catch(javax.persistence.NoResultException e)
        {
            //return false;
            java.net.URI location = new java.net.URI("../ehdokas.jsp?msg=failed");
            return Response.temporaryRedirect(location).build();
        }
        finally{
        em.close();
        }
    }
    
    @DELETE
    @Path("/remove/{e_id}/{k_id}")
    public boolean removeAnswer(@PathParam("e_id") int e_id, @PathParam("k_id") int k_id) {
        EntityManagerFactory emf=Persistence.createEntityManagerFactory("vaalikones");
        EntityManager em=emf.createEntityManager();
        VastauksetPK vpk = new VastauksetPK(e_id, k_id);
        Vastaukset v=em.find(Vastaukset.class, vpk);
        if (v!=null) {
            em.getTransaction().begin();
            em.remove(v);
            em.getTransaction().commit();
            em.close();            
            return true;
        }
        return false;
    }
}
	
	

