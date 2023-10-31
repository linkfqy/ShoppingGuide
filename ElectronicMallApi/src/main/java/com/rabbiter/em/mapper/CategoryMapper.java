package com.rabbiter.em.mapper;

import com.rabbiter.em.entity.Category;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.rabbiter.em.entity.GoodStandard;
import org.apache.ibatis.annotations.Select;

import java.util.List;

public interface CategoryMapper extends BaseMapper<Category> {

    @Select("select name from category where id = #{id}")
    String getNameById(int id);
}
