package com.rabbiter.em.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.rabbiter.em.entity.IconCategory;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.data.repository.query.Param;

import java.util.List;

@Mapper
public interface IconCategoryMapper extends BaseMapper<IconCategory> {
    /**
     * 根据 Icon 的 ID 获取对应的 categoryId 列表
     * @param iconId Icon 的 ID
     * @return categoryId 列表
     */
    List<Long> getCategoryIdsByIconId(@Param("iconId") Long iconId);

}
