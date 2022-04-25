<%@page import="java.sql.DriverManager"%>
<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.Statement"%>
<%@page import="java.sql.Connection"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="java.util.*,vaalikone.Vaalikone,persist.*"%>
<%@ page import="java.io.*,java.util.*,java.sql.*"%>
<%@ page import="javax.servlet.http.*,javax.servlet.*" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/sql" prefix="sql"%>

<!doctype html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Hallitse</title>

<link href="style.css" rel="stylesheet" type="text/css">
</head>
<body>
<div id="container">
<img id="headerimg" src="Logo.png" width="500" height="144" alt=""/>
<h2>HALLINTAPANEELI</h2>
<h3>Kaikki ehdokkaat</h3>
<h4>Tällä sivulla voi tarkastella kaikkia ehdokkaita! Lisäksi voi lisätä uusia, muokata jo olemassa olevia sekä poistaa ehdokkaita! </h4>


<p><br/></p>
<div class="row">
	<div class="col-md-6">
		<h3></h3>
	</div>
	<div class=col-md-6"></div>
	<a href="addnew.jsp" class="btn btn-primary">Lisää uusi</a>
	<a href="succesfulLogin.html" class="btn btn-default">Palaa etusivulle</a>

</div>
<p></p>
<table id="ehdokkaat" class="table table-bordered table-striped table-hover">
	<thead>
		<tr>
			<th>Numero</th>
			<th>Etunimi</th>
			<th>Sukunimi</th>
			<th>Puolue</th>
			<th class="text-center">Toiminnot</th>
			
			
		</tr>
	</thead>
	<tbody>
		<%
		String host = "jdbc:mysql://localhost:3306/Vaalikone";
		Connection conn = null;
		Statement stat = null;
		ResultSet res = null;
		Class.forName("com.mysql.jdbc.Driver");
		conn = DriverManager.getConnection(host, "pena", "kukkuu");
		stat = conn.createStatement();
		String data = "select * from Ehdokkaat order by ehdokas_id desc";
		res = stat.executeQuery(data);
		while(res.next()){
		%>
		<tr>
		<td><%=res.getString("EHDOKAS_ID")%></td>
		<td><%=res.getString("ETUNIMI")%></td>
		<td><%=res.getString("SUKUNIMI")%></td>
		<td><%=res.getString("PUOLUE")%></td>
		
		<td class="text-center">
		<a href='edit.jsp?u=<%=res.getString("EHDOKAS_ID")%>' class="btn1 btn-edit">Muokkaa</a>
		<a href='delete.jsp?d=<%=res.getString("EHDOKAS_ID")%>' class="btn1 btn-delete">Poista</a>
		</td>
		
		
		</tr>
		<%
		}
		%>
	</tbody>
</table>


</body>

</html>