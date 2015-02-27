package com.newlecture.jspprj.dao;

import com.newlecture.jspprj.model.Platform;
import com.newlecture.jspprj.model.SubPlatform;

public interface SubPlatformDao {
	
	public <List>SubPlatform getSubPlatforms(String PlatformCode);
	public int insert(SubPlatform subPlatform);
	public int update(SubPlatform subPlatform);
	public int delete(String code);
	public int getSize(String query, String field);
	

}
