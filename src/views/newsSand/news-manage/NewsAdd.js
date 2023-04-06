import React, { useState } from 'react'
import { Button, PageHeader, Steps } from 'antd'

import style from './News.module.css'

const { Step } = Steps
export default function NewsAdd() {
  const [current, setCurrent] = useState(0)
  const handleNext = () => {
    setCurrent(current + 1)
  }
  const handlePrevious = () => {
    setCurrent(current - 1)
  }
  return (
    <div>
      <PageHeader
        className="site-page-header"
        title="撰写新闻"
        subTitle="This is a subtitle"
      />
      <Steps current={0}>
        <Step title="基本信息添加与确定" description="新闻标题、新闻分类等" />
        <Step title="新闻内容编写与修改" description="新闻的主体内容" />
        <Step title="提交新闻并等待审核" description="保存到草稿箱或者是提交审核并等待" />
      </Steps>

      <div className={current===0?'':style.active}></div>
      <div className={current===1?'':style.active}></div>
      <div className={current===2?'':style.active}></div>

      <div style={{marginTop: "40px"}}>
        {
          current === 2 && <span>
            <Button type="primary">保存到草稿箱</Button>
            <Button danger>提交审核</Button>

          </span>
        }

        {
          current < 2 && <Button type="primary" onClick={() => handleNext()}>下一步</Button>
        }
        {
          current > 0 && <Button onClick={() => handlePrevious()}>上一步</Button>
        }
      </div>
    </div>
  )
}
