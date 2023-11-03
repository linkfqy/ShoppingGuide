package com.rabbiter.em.controller;

import com.rabbiter.em.annotation.Authority;
import com.rabbiter.em.common.Result;
import com.rabbiter.em.entity.AuthorityType;
import com.rabbiter.em.entity.UserInfo;
import com.rabbiter.em.service.UserInfoService;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.Map;


@RestController
@RequestMapping("/api/userinfo")
public class UserInfoController {

    @Resource
    private UserInfoService userInfoService;
    @Resource
    private HttpServletRequest request;

    private UserInfo userInfo;

    /**
     * 从前端获取当前iconId或categoryId
    */
    @Authority(AuthorityType.requireLogin)
    @PostMapping("/post_iconId_or_categoryId")
    public Result getIconIdOrCategoryId(
            @RequestBody Map<String, Object> data
    ) {
        Integer iconId = data.get("iconId") == null? null : (Integer) data.get("iconId");
        Integer categoryId = data.get("categoryId") == null ? null : (Integer) data.get("categoryId");
        userInfo = userInfoService.getUserInfo(iconId, categoryId, request);
        return Result.success(userInfo);
    }

}

