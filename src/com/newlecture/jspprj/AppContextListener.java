package com.newlecture.jspprj;

import javax.servlet.ServletContext;
import javax.servlet.ServletContextAttributeEvent;
import javax.servlet.ServletContextAttributeListener;
import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import javax.servlet.annotation.WebListener;

@WebListener
public class AppContextListener implements ServletContextListener, ServletContextAttributeListener {


	@Override
	public void contextInitialized(ServletContextEvent servletContextEvent) {
		ServletContext ctx = servletContextEvent.getServletContext();
		System.out.println("어플리케이션 초기화됨");
	}

	@Override
	public void contextDestroyed(ServletContextEvent servletContextEvent) {
		System.out.println("어플리케이션 종료됨");
	}

	@Override
	public void attributeAdded(ServletContextAttributeEvent event) {
		System.out.println("어플리케이션 속성 "+ event.getName() + "이 값 " + event.getValue() + "으로 추가됨");
	}

	@Override
	public void attributeRemoved(ServletContextAttributeEvent event) {
		System.out.println("어플리케이션 속성 "+ event.getName() + "이 제거됨");
	}

	@Override
	public void attributeReplaced(ServletContextAttributeEvent event) {
		System.out.println("어플리케이션 속성 "+ event.getName() + "이 값 " + "이 변경됨");
	}
}
