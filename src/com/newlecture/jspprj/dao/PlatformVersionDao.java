package com.newlecture.jspprj.dao;

import com.newlecture.jspprj.model.Platform;

public interface PlatformVersionDao 
{
    public <List>Platform getPlatforms(String code);
	public int insert(PlatformVersion platformVersion);
	public int update(PlatformVersion platformVersion);
	public int delete(String code);
	public int getSize(String query, String field);
	
}
