package com.rabbiter.em.mapper;

import com.rabbiter.em.entity.Icon;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

public interface IconMapper extends BaseMapper<Icon> {

    List<Icon> getIconCategoryMapList();

    @Select("select name from icon where id = #{id}")
    String getNameById(int id);
}
