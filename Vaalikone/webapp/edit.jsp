<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.Statement"%>
<%@page import="java.sql.DriverManager"%>
<%@page import="java.sql.PreparedStatement"%>
<%@page import="java.sql.Connection"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>

<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Muokkaa ehdokasta</title>
<link href="style.css" rel="stylesheet" type="text/css">
</head>

<body>
	<div id="container">
		<img id="headerimg" src="Logo.png" width="500" height="144" alt="" />
		<h2>Muokkaa ehdokasta</h2>

		<%
			String host = "jdbc:mysql://localhost:3306/Vaalikone";
			Connection conn = null;
			Statement stat = null;
			ResultSet res = null;
			PreparedStatement stmt = null;
			Class.forName("com.mysql.jdbc.Driver").newInstance();
			conn = DriverManager.getConnection(host, "pena", "kukkuu");
		%>

		<form action="" method="post">
			<%
				stat = conn.createStatement();
				String u = request.getParameter("u");
				int num = Integer.parseInt(u);
				String data = "select * from Ehdokkaat where ehdokas_id='" + num + "'";
				res = stat.executeQuery(data);
				while (res.next()) {
			%>
			<input type="hidden" name="id"
				value='<%=res.getString("ehdokas_id")%>' />
			<div class="form-group">
				<label>Etunimi</label> <input type="Etunimi" class="form-control"
					name="etu" value='<%=res.getString("Etunimi")%>' />
			</div>
			<div class="form-group">
				<label>Sukunimi</label> <input type="Sukunimi" class="form-control"
					name="suku" value='<%=res.getString("Sukunimi")%>' />
			</div>
			<div class="custom-select" style="width: 800px;">
				<label>Puolue</label> <select id="puolueet" name="puo" >
					<option value="SDP">Suomen Sosialidemokraattinen Puolue
						(SDP)</option>
					<option value="Keskusta">Suomen Keskusta</option>
					<option value="Kokoomus">Kansallinen Kokoomus</option>
					<option value="Suomen ruotsalainen kansanpuolue">Suomen
						ruotsalainen kansanpuolue</option>
					<option value="Kristillisdemokraatit">Suomen
						Kristillisdemokraatit</option>
					<option value="Vihreät">Vihreä liitto</option>
					<option value="Vasemmistoliitto">Vasemmistoliitto</option>
					<option value="Perussuomalaiset">Perussuomalaiset</option>
					<option value="Liberaalipuolue">Liberaalipuolue</option>
					<option value="Piraattipuolue">Piraattipuolue</option>
					<option value="Eläinoikeuspuolue">Eläinoikeuspuolue</option>
					<option value="Kansalaispuolue">Kansalaispuolue</option>
					<option value="Feministinen puolue">Feministinen puolue</option>
					<option value="Sininen tulevaisuus">Sininen tulevaisuus</option>
					<option value="Liike Nyt">Liike Nyt</option>
				</select>
			</div>
			<div class="form-group">
				<label>Kotipaikkakunta</label> <input type="Kotipaikkakunta"
					class="form-control" name="koti" value='<%=res.getString("Kotipaikkakunta")%>' />
			</div>
			<div class="form-group">
				<label>Ikä</label> <input type="Ika" class="form-control" name="ika"
					value='<%=res.getString("Ika")%>' />
			</div>
			<div class="form-group">
				<label>Ammatti</label> <input type="Ammatti" class="form-control"
					name="am" value='<%=res.getString("Ammatti")%>' />
			</div>
			<%
				}
			%>

			<button type="submit" class="btn btn-warning">Tallenna</button>
			<a href="admin.jsp" class="btn btn-default">Takaisin</a>
		</form>

		<script>
			var x, i, j, selElmnt, a, b, c;
			/*look for any elements with the class "custom-select":*/
			x = document.getElementsByClassName("custom-select");
			for (i = 0; i < x.length; i++) {
				selElmnt = x[i].getElementsByTagName("select")[0];
				/*for each element, create a new DIV that will act as the selected item:*/
				a = document.createElement("DIV");
				a.setAttribute("class", "select-selected");
				a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
				x[i].appendChild(a);
				/*for each element, create a new DIV that will contain the option list:*/
				b = document.createElement("DIV");
				b.setAttribute("class", "select-items select-hide");
				for (j = 1; j < selElmnt.length; j++) {
					/*for each option in the original select element,
					create a new DIV that will act as an option item:*/
					c = document.createElement("DIV");
					c.innerHTML = selElmnt.options[j].innerHTML;
					c
							.addEventListener(
									"click",
									function(e) {
										/*when an item is clicked, update the original select box,
										and the selected item:*/
										var y, i, k, s, h;
										s = this.parentNode.parentNode
												.getElementsByTagName("select")[0];
										h = this.parentNode.previousSibling;
										for (i = 0; i < s.length; i++) {
											if (s.options[i].innerHTML == this.innerHTML) {
												s.selectedIndex = i;
												h.innerHTML = this.innerHTML;
												y = this.parentNode
														.getElementsByClassName("same-as-selected");
												for (k = 0; k < y.length; k++) {
													y[k]
															.removeAttribute("class");
												}
												this.setAttribute("class",
														"same-as-selected");
												break;
											}
										}
										h.click();
									});
					b.appendChild(c);
				}
				x[i].appendChild(b);
				a.addEventListener("click", function(e) {
					/*when the select box is clicked, close any other select boxes,
					and open/close the current select box:*/
					e.stopPropagation();
					closeAllSelect(this);
					this.nextSibling.classList.toggle("select-hide");
					this.classList.toggle("select-arrow-active");
				});
			}
			function closeAllSelect(elmnt) {
				/*a function that will close all select boxes in the document,
				except the current select box:*/
				var x, y, i, arrNo = [];
				x = document.getElementsByClassName("select-items");
				y = document.getElementsByClassName("select-selected");
				for (i = 0; i < y.length; i++) {
					if (elmnt == y[i]) {
						arrNo.push(i)
					} else {
						y[i].classList.remove("select-arrow-active");
					}
				}
				for (i = 0; i < x.length; i++) {
					if (arrNo.indexOf(i)) {
						x[i].classList.add("select-hide");
					}
				}
			}
			/*if the user clicks anywhere outside the select box,
			 then close all select boxes:*/
			document.addEventListener("click", closeAllSelect);
		</script>
</body>

</html>
<%
	String a = request.getParameter("id");
	String b = request.getParameter("etu");
	String c = request.getParameter("suku");
	String d = request.getParameter("puo");
	String e = request.getParameter("koti");
	String f = request.getParameter("ika");
	String g = request.getParameter("am");
	if (a!=null && b!=null && c!=null && d!=null && e!=null && f!=null && g!=null) {
		String query = "update Ehdokkaat set etunimi=?, sukunimi=?, puolue=?, kotipaikkakunta=?, ika=?, ammatti=? where ehdokas_id='"
				+ a + "'";
		stmt = conn.prepareStatement(query);
		stmt.setString(1, b);
		stmt.setString(2, c);
		stmt.setString(3, d);
		stmt.setString(4, e);
		stmt.setString(5, f);
		stmt.setString(6, g);
		stmt.executeUpdate();
		response.sendRedirect("admin.jsp");
	}
%>