

/*function f1(){
	alert(this);
}

f1();
new f1();*/

function NoticeDao() {
	/*this.getNotices = function(page) {
		var oReq = new XMLHttpRequest();
		if (oReq) {

			oReq.onreadystatechange = function() {
				if (oReq.readyState == 4) {
					var data = eval(oReq.responseText);
					alert(data[1].id);
				}
			}

			oReq.open("GET", "data.jsp?=p"+page, true);
			oReq.send();
			var date = eval(oReq.responseText);

			return data;
		}
	}*/
}

NoticeDao.prototype = {
	getNotices : function(page, callback) {
		var oReq = new XMLHttpRequest();
		if (oReq) {

			oReq.onreadystatechange = function() {
				if (oReq.readyState == 4) {
					var data = eval(oReq.responseText);
					callback(data);
				}
			}

			oReq.open("GET", "data.jsp?=p" + page, true);
			oReq.send();
		}
	}
};

var noticeDao = new NoticeDao();
noticeDao.getNotices(1, function(data){alert(data[0].title);})
/*
 * function Exam(){ this.kor = 0; this.eng = 0; this.math = 0;
 * 
 * this.total = function(){ return this.kor + this.eng + this.math; } this.avg =
 * function(){ return this.total() / 3; } }
 * 
 * Exam.prototype = { cnt : 0, total : function() { this.cnt++; return this.kor +
 * this.eng + this.math; }, avg : function() { return this.total() / 3; } }
 * 
 * 
 * Exam.prtotype.total = function(){ return this.kor + this.eng + this.math; }
 * 
 * Exam.prototype.avg = function(){ return this.total() / 3; }
 * 
 * 
 * var ex1 = new Exam(); ex1.kor = 30; ex1.eng = 40; ex1.math = 50; ex1.total();
 * alert(ex1.cnt);
 * 
 * var ex2 = new Exam(); ex2.kor = 10; ex2.total(); alert(ex1.cnt);
 * 
 * var ex3 = new Exam(); ex3.kor = 20; ex3.total(); alert(ex1.cnt);
 */












