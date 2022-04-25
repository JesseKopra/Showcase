package data;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Vastaus implements Serializable{
    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int ehdokas_id;
    private int vastaus_id;
    private int vastaus;
   
    public Vastaus() {
       
    }
    public Vastaus(int ehdokas_id, int vastaus_id) {
        this.ehdokas_id=ehdokas_id;
        this.vastaus_id=vastaus_id;
    }
    public Vastaus(int ehdokas_id, String vastaus_id) {
        this.ehdokas_id=ehdokas_id;
        this.setvastaus(vastaus);
    }
    
    public Vastaus(int ehdokas_id, int vastaus_id, int vastaus) {
    	this.vastaus_id=vastaus_id;
    	this.ehdokas_id=ehdokas_id;
        this.setvastaus(vastaus);
    }
    
    public int getehdokas_id() {
        return ehdokas_id;
    }
    public void setehdokas_id(int ehdokas_id) {
        this.ehdokas_id = ehdokas_id;
    }
    public void setehdokas_id(String ehdokas_id) {
        try {
            this.ehdokas_id = Integer.parseInt(ehdokas_id);
        }
        catch(NumberFormatException e) {
            this.ehdokas_id=0;
        }
    }
    public int getvastaus_id() {
        return vastaus_id;
    }
    public void setvastaus_id(int vastaus_id) {
        this.vastaus_id = vastaus_id;
    }
    public int getvastaus() {
        return vastaus;
    }
    public void setvastaus(int vastaus) {
        this.vastaus = vastaus;
    }
    public void setvastaus(String vastaus) {
        try {
            this.vastaus = Integer.parseInt(vastaus);
        }
        catch(NumberFormatException e) {
            this.vastaus=0;
        }
    }
    public String toString() {
        return this.ehdokas_id+": "+this.vastaus_id+"/"+this.vastaus;
    }
}