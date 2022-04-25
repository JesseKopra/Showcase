<%@page import="java.sql.DriverManager"%>
<%@page import="java.sql.Statement"%>
<%@page import="java.sql.Connection"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>

<%
String ehdokas_id = request.getParameter("d");
int no = Integer.parseInt(ehdokas_id);
Class.forName("com.mysql.jdbc.Driver").newInstance();
Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/Vaalikone","pena","kukkuu");
Statement stat = conn.createStatement();
stat.executeUpdate("delete from Ehdokkaat where ehdokas_id='"+no+"'");
response.sendRedirect("admin.jsp");
%>